import React from 'react';
import {Card, CardFooter} from '@heroui/card';


const images = [
    '/GriffHarness.png',
    '/slyGriff.png',
    '/wpiGriff.jpg',
    '/collaredGriff.png',
    '/FluffyGriff.png',
    '/refSheet.jpg',
    '/jockGriff.png',
    '/slimGriff.png',
    '/thiccGriff.jpg',
]

const descriptions = [
    'Art by: Artist A',
    'Art by: Artist B',
    'Art by: Artist C',
    'Art by: Artist D',
    'Art by: Artist E',
    'Art by: Artist F',
    'Art by: Artist G',
    'Art by: Artist H',
    'Art by: Artist I',
]

const Art = () => {
    return (
        <div className='bg-gradient-to-b from-[#000000] to-[#440044] min-h-screen p-8'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {images.map((src, i) => (
          <Card key={i} isFooterBlurred className="border-none" radius="lg">
            <div className="w-full aspect-square relative">
              <img
                src={src}
                alt="Art piece"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-semibold text-white">{descriptions[i]}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
        </div>
    );
}
export default Art;