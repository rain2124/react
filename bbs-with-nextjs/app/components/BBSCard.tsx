import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from '@/app/types/types';

interface BBSDataProps {
  bbsData: BBSData;
}
const BBSCard = ({bbsData}: BBSDataProps) => {
  const { id, title, content, createAt, username } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-post/${id}`} className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard;