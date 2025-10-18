import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  timestamp: string;
};  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const timestamp = new Date();
  res.status(200).json({ name: 'Gerson Silva', timestamp: timestamp.toISOString() });
}