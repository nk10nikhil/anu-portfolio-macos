import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export function Contact() {
  return (
    <div className="max-h-full overflow-y-auto">
      <div className="relative h-36">
        <Image
          fill
          className="object-cover object-center"
          alt=""
          src={'/assets/images/keyboard-cover.jpg'}
        />
        <Image
          className="absolute left-5 top-14 rounded-full"
          alt=""
          width={120}
          height={120}
          src={'/assets/images/author.jpg'}
        />
        <h1 className="absolute bottom-5 left-40 text-4xl font-medium text-dark-text">
          Anupriya
        </h1>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8 font-medium">
        <Link
          href={'https://www.linkedin.com/in/anupriyasaini21/'}
          target="_blank"
          className="flex gap-2 rounded bg-black/5 px-3 py-1 text-sky-500 dark:bg-white/10"
        >
          <IconBrandLinkedin />
          <span>Linkedin</span>
        </Link>
        <Link
          href={'https://github.com/anupriyasaini21'}
          target="_blank"
          className="flex gap-2 rounded bg-black/5 px-3 py-1 dark:bg-white/10"
        >
          <IconBrandGithub />
          <span>Github</span>
        </Link>
        <Link
          href={'https://leetcode.com/u/anupriyasaini21/'}
          target="_blank"
          className="flex gap-2 rounded bg-black/5 px-3 py-1 text-[#FFA116] dark:bg-white/10"
        >
          <IconBrandLeetcode />
          <span>LeetCode</span>
        </Link>
        <Link
          href="mailto:anupriyasaini2110@gmail.com"
          className="flex gap-2 rounded bg-black/5 px-3 py-1 text-[#EB493B] dark:bg-white/10"
        >
          <IconBrandGmail />
          <span>E-mail</span>
        </Link>
      </div>
      <div className="p-4 text-justify text-lg">
        <h2 className="text-xl font-medium mb-4">About Me</h2>
        <div className="float-right ml-8">
          <Image
            alt=""
            src={'/assets/images/author2.jpg'}
            width={200}
            height={100}
            className='rounded'
          />
        </div>
        <p className="mb-4">
          Hello! I'm Anupriya Saini, a passionate software developer with a
          strong foundation in computer science and a keen interest in building
          innovative solutions. I hold a Bachelor's degree in Computer Science
          and Engineering from Galgotia College of Engineering and Technology, where I honed my skills in
          programming, data structures, and algorithms.
        </p>
        <p className="mb-4">
          Over the years, I've gained hands-on experience in various
          technologies, including JavaScript, React, Node.js, and Python. I'm
          particularly enthusiastic about web development and enjoy creating
          user-friendly applications that solve real-world problems. My journey
          in the tech world has been driven by a constant desire to learn and
          grow, and I actively participate in coding challenges on platforms
          like LeetCode to sharpen my problem-solving skills.
        </p>
      </div>
    </div>
  )
}
