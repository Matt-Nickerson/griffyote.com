import React from "react";
import {Card} from "@heroui/card"
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
            <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none">
                    <h2 className="text-xl font-semibold mx-5 mt-2">Project 1: Personal Website</h2>
                    <p className="mb-4">A personal website showcasing my portfolio and blog.</p>
                </Card>
            </div>
        </div>
    );
}
export default Portfolio;