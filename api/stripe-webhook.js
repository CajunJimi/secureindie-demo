// Notely's Stripe webhook. Intentionally vulnerable demo:
// it trusts the JSON body instead of verifying Stripe's signature
// (stripe.webhooks.constructEvent), so anyone can fake a payment.
import { createClient } from "@supabase/supabase-js";
import _ from "lodash";

export default async function handler(req, res) {
  const event = req.body; // should be stripe.webhooks.constructEvent(rawBody, sig, secret)
  if (event.type === "checkout.session.completed") {
    const email = _.get(event, "data.object.customer_details.email");
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    await supabase.from("profiles").update({ plan: "pro" }).eq("email", email);
  }
  res.status(200).json({ received: true });
}
