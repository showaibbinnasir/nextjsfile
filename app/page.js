'use client'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage, Card, CardContent, CardDescription, CardTitle } from 'keep-react'

import { Button } from 'keep-react'
import { ShoppingCart } from 'phosphor-react'

export default function Home() {
  return (
    <div className="flex justify-center mt-10 p-5">
      <div>
        <h1 className="text-center text-3xl font-semibold">Hello World</h1>
        <h1 className="text-center text-lg uppercase ">I am Showaib bin Nasir</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam. </h1>
        <div className="flex justify-center mt-10">
          <div>
            <Card className="max-w-md">
              <CardContent>
                <CardTitle>Our Contributors</CardTitle>
                <CardDescription>They help us to grow up the keep react component library</CardDescription>
                <AvatarGroup className="mt-3">
                  <Avatar>
                    <AvatarImage src="/images/avatar/avatar-1.png" />
                    <AvatarFallback>KR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/images/avatar/avatar-2.png" />
                    <AvatarFallback>BR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/images/avatar/avatar-3.png" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/images/avatar/avatar-4.png" />
                    <AvatarFallback>DD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/images/avatar/avatar-5.png" />
                    <AvatarFallback>CX</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
              </CardContent>
              <Button className="m-5" radius="full">
                <ShoppingCart size={18} className="mr-1.5" />
                Add to cart
              </Button>
            </Card>
          </div>
        </div>


      </div>
    </div>
  );
}
