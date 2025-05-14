import React from 'react'
import { Text } from "@/components/Atoms/Text/Text";
import ShinyText from '@/components/Atoms/ShinyText/ShinyText';
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"; 
import { ClipboardCheck, Clipboard, Folders } from 'lucide-react';
import { FancyButton } from '@/components/Atoms/FancyButton/FancyButton';
import Link from 'next/link';
import GithubIcon from '@/common/assets/icons/GithubIcon';

 const OpenSourceSection = () => {
    const { copied, copy } = useCopyToClipboard();
  return (
    <div className='h-auto w-full flex items-center flex-col gap-16 md:gap-8 my-28 md:py-52 lg:p-0  lg:my-52 '>
        <div className="w-fit  px-5 py-2 bg-orange-500 rounded-full ]">
                  <Text as="p" color="secondary" fontWeight="700" size="normal">
                    Creative Power
                  </Text>
                </div>

        <div className='flex flex-col gap-5 w-[85%] md:w-[70%] lg:w-[50%]'>
            <h2 className="text-center text-[30px] md:text-[64px] font-bold text-gray-800 dark:text-white">
                Open Source. Built with care.
            </h2>
            <Text className="text-center" as="p" color='primary' size="normal" fontWeight="600">
                Culture UI is an open source UI library crafted to improve developer experience and design consistency. It's built by and for the community and you’re welcome to be part of it.
            </Text>
        </div>
        <div className='flex flex-col md:flex-row mt-5 gap-4 justify-center w-auto'>
            
            <FancyButton>
            <Link
              href="/docs"
              
              className="flex gap-3 justify-center items-center"
            >
              Explore the Docs
              <Folders size={16} strokeWidth={3}/>
            </Link>
          </FancyButton>
          <FancyButton >
          <Link
            href="https://github.com/julianvidela/Culture-Ui"
            target="_blank"
            className="flex items-center gap-3 "
          >
            <GithubIcon size={16} strokeWidth={3} />
           Contribute on GitHub
          </Link>
          </FancyButton>
           
        </div>
        <div className="flex gap-4 h-[50px] px-6  items-center">
  <div className="group cursor-pointer">
     <ShinyText text=" ~ npm i culture-ui" speed={3} className="text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r animate-text" />
    <button
      onClick={() => copy("npm i culture-ui")}
      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-white rounded-md"
      aria-label="Copiar código"
    >
      {copied ? <ClipboardCheck color="#b5b5b5a4" size={13} strokeWidth={3}/> : <Clipboard color="#b5b5b5a4" size={13} strokeWidth={3} />}
    </button>
  </div>
</div>

    </div>
  )
}

export default OpenSourceSection


