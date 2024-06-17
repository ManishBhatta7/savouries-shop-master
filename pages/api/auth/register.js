import { hash } from 'bcryptjs';


export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  // Check if the user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) return res.status(409).json({ error: 'User already exists' });

  // Hash the password
  const hashedPassword = await hash(password, 10);

  // Save the user (this is a placeholder, you should use a database)
  users.push({ email, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
}
