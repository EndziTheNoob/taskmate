export default function handler(req, res) {
  if (req.method === 'POST') {
    // připojení k Supabase ??
    const { email, password } = req.body;
    if (email === 'test@example.com' && password === 'secret') {
      res.status(200).json({ message: 'Přihlášení úspěšné' });
    } else {
      res.status(401).json({ message: 'Nesprávné přihlašovací údaje' });
    }
  }
}
