import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

export default async function getUserIp () {
  const res = await fetch("https://api.ipify.org/?format=json")

  return res.json()
};