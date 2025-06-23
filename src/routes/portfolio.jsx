import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Divider} from "@heroui/divider";
import {Hospital} from "lucide-react";
import {Button} from "@heroui/button";


const Portfolio = () => {
    return (
        <div className='bg-gradient-to-b from-[#000000] to-[#AD483C] min-h-screen p-8'>
            <h1 className="text-3xl font-bold text-center mb-4">
                Project Portfolio
            </h1>
            <p className="text-lg text-center mb-8">
                Running list of projects I have worked on, both personal and professional.
            </p>
            <div className="mx-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-none max-w-md ">
                    <CardHeader className="ml-2 flex gap-4">
                        <Hospital className="size-8"/>
                        <div className="flex flex-col ">
                             <p className="text-lg font-semibold">Brigham & Women’s Hospital Website</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <img src="/BWMap.png" alt="B&W Map" className="w-full h-auto rounded-lg mb-4"/>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex flex-col mb-2">
                         <p className="text-medium mb-4">I worked on an 11-person team in CS3733 Software Engineering to apply Agile development methodologies and software design patterns in the creation of a web application prototype running in the cloud for Brigham & Women’s Hospital.
The web application was developed using the PERN (PostgreSQL, Express, React, Node.js) stack with Typescript, Prisma ORM, Shadcn and Tailwind.
As a lead software engineer, I helped gather software requirements by participating in brainstorming sessions, creating user stories, and planning out tasks and deadlines with priorities. I was the technical leader of the front-end team.
</p>
                    </CardFooter>
                </Card>
                <Card className="border-none max-w-md ">
                    <CardHeader className="ml-2 flex gap-4">
                        <div className="flex flex-col ">
                             <p className="text-lg font-semibold">TBD</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>TBD</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex flex-col mb-2">
                         <p className="text-medium mb-4"> TBD </p>
                    </CardFooter>
                </Card>
                <Card className="border-none max-w-md ">
                    <CardHeader className="ml-2 flex gap-4">
                        <div className="flex flex-col ">
                             <p className="text-lg font-semibold">TBD</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>TBD</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex flex-col mb-2">
                         <p className="text-medium mb-4"> TBD </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
export default Portfolio;