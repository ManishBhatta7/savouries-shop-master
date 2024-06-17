import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  const isValid = await compare(password, user.password);
  if (!isValid) return res.status(401).json({ error: 'Invalid email or password' });

  const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });

  res.status(200).json({ token });
}
