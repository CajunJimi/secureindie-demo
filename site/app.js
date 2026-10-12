// Notely front-end (demo). The Supabase URL and anon key are public by design;
// the real mistake is the missing row level security on `profiles` (see README).
const SUPABASE_URL = "https://xaanaafyergbxgmltxyw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhYW5hYWZ5ZXJnYnhnbWx0eHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3NzkwMzQsImV4cCI6MjEwNzM1NTAzNH0.yl--ZbbCoeX01f1lcnBuarZ6wpAp22VdaW2rbmkQ6AM";

document.getElementById("signup").addEventListener("click", function () {
  alert("Sign-ups are closed: Notely is a demo for SecureIndie's sample report.");
});
