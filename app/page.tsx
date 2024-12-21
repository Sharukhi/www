import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sharukhi
      </h1>
      <p className="mb-2">
        {`Hello! I'm Sharukhi. Growing up, I taught myself how to do computer stuff and discovered that I really enjoy making things. That's mostly it.`}
      </p>
      <p className="mb-2">
        {`Currently I'm mostly exploring this world of technology and working on my personal projects`}
      </p>
      <p className="mb-2">
        {`I also like taking photos —I kinda suck at it but i enjoy it`}
      </p>
      <p className="mb-3">
        Feel free to write me — <a href='mailto:hello@sharukhi.xyz' className='underline' target='_blank'>hello@sharukhi.xyz</a>
      </p>
      <div className="my-8">
        <h2 className="font-semibold mb-4">Projects</h2>
        <ul className="transition-all hover:text-black dark:hover:text-white">
          <li>- <a href="https://github.com/sharukhi/drivesafe" target='_blank' className="underline">Drivesafe</a></li>
          <li>- <a href="https://github.com/sharukhi/oab" target='_blank' className="underline">OAB</a></li>
          <li>- <a href="https://github.com/sharukhi/khobor" target='_blank' className="underline">Khobor</a></li>
          <li>- <a href="https://github.com/sharukhi/lofi-box" target='_blank' className="underline">Lofi-Box</a></li>
        </ul>
      </div>
      <div className="my-8">
      <h2 className='font-semibold mb-4'>Blog</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
