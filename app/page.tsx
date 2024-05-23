import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <div className="w-full max-w-5xl mt-8">
        <h2 className="text-2xl font-semibold mb-4">5 Most Favourite Tasks:</h2>
        <ol className="list-decimal list-inside">
          <li className="mb-2">
            <strong>Dig through logs to troubleshoot a customer&apos;s broken project.</strong>
            <p>
              I enjoy finding the root cause of issues, as it&apos;s like solving a puzzle. This process is not only engaging but also helps me improve my technical understanding of how systems work.
            </p>
          </li>
          <li className="mb-2">
            <strong>Write and maintain support articles and documentation pages.</strong>
            <p>
              Writing and maintaining documentation allows me to gain a deeper understanding of how applications and services are set up, including their limitations. This knowledge is invaluable for answering customer queries effectively.
            </p>
          </li>
          <li className="mb-2">
            <strong>Work with the product team to develop new features based on customer feedback.</strong>
            <p>
              Customer feedback is essential for product and business improvement. Collaborating with the product team to incorporate this feedback helps provide the best experience for our customers and demonstrates that we genuinely care about their needs.
            </p>
          </li>
          <li className="mb-2">
            <strong>Act as a dedicated Customer Support Engineer (CSE) for key customers to ensure their success using Vercel.</strong>
            <p>
              Building strong relationships with key customers and understanding their infrastructure is very rewarding. It enables me to address their concerns more effectively and fosters a direct connection that facilitates quicker resolution of issues.
            </p>
          </li>
          <li className="mb-2">
            <strong>Help train and onboard new support teammates.</strong>
            <p>
              Training new teammates is an opportunity to build a strong team by sharing essential knowledge about our systems, common issues, and internal processes. A strong team leads to a strong company, which ultimately enhances customer experience. Additionally, it helps build good professional relationships within the team.
            </p>
          </li>
        </ol>
      </div>
      <div className="w-full max-w-5xl mt-8">
        <h2 className="text-2xl font-semibold mb-4">5 Least Favourite Support Tasks:</h2>
        <ol className="list-decimal list-inside">
          <li className="mb-2">
            <strong>Help resolve billing issues for customers.</strong>
            <p>
               While I dont dislike resolving billing issues, I find them straightforward and lacking in challenge.
            </p>
          </li>
          <li className="mb-2">
            <strong>Work with potential customers to determine if Vercel is suitable for their use case.</strong>
            <p>
              I find it difficult to tell customers that Vercel may not be suitable for their needs. I always want to provide all necessary tools and solutions, but I understand that this is not always possible.
            </p>
          </li>
          <li className="mb-2">
            <strong>Create video tutorials to help teach users a specific feature or use case.</strong>
            <p>
               I&apos;m concerned that I might not come across well on video or that my voice may not be captivating. However, I do see the value in creating video tutorials and have considered making my own YouTube tutorial in the future.
            </p>
          </li>
          <li className="mb-2">
            <strong>Analyze hundreds of support tickets to spot trends for the product team.</strong>
            <p>
              This task is time-consuming and could be handled by a dedicated team. As a CSE, I believe my time would be better spent directly assisting customers. Trends can be discussed in team meetings to confirm their validity before being presented to the product team.
            </p>
          </li>
          <li className="mb-2">
            <strong>Find and recruit teammates for the support team.</strong>
            <p>
              I believe the manager is best suited for recruitment, as they have a broader understanding of team dynamics and needs.
            </p>
          </li>
        </ol>
      </div>
      <div className="w-full max-w-5xl mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    2.What do you want to learn or do more of at work?
  </h2>
  <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
    <li className="mb-2">
      <p>
        I am very eager to dive deeper into all the technologies, tools, and documentation related to this role. I believe that mastering these areas is crucial for delivering high-quality work and contributing effectively to the team. I am committed to giving my 100 percent to the work.
      </p>
    </li>
  </ol>
</div>
      <div className="w-full max-w-5xl mt-8">
        <h2 className="text-2xl font-semibold mb-4">3. Describe how you solved a challenge or technical issue that you faced in a previous role
(preferably in a previous support role). How did you determine that your solution was
successful?:</h2>
        <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
          <li className="mb-2">
            <p>
               My customer had an issue with connecting their Database cluster from the Kubernetes cluster pod, customer did not make any recent changes but was not able to connect but it was working before. I began by collecting all relevant information from the customer. This included timestamps, screenshots of the error, and the steps to replicate the issue. To diagnose the problem, I attempted to replicate the issue on my end by launching a pod in the same region as the customer&apos;s Kubernetes cluster. I was able to successfully connect to the Database cluster, indicating that the issue was specific to the customer&apos;s setup and not a global issue. I collected logs from the pod and conducted an initial analysis. Given the nature of the logs and my findings, I suspected that the issue might be internal and beyond a typical support fix.I escalated the issue to the Engineering team, providing all the logs and detailed information I had gathered. Collaborating closely with the engineers, we determined that the issue was related to the DNS pod. Based on our findings, we advised the customer to change the hostname to a public DNS. This adjustment resolved the issue, confirming that our diagnosis and solution were correct.
            </p>
          </li>
      </ol>
    </div>
    <div className="w-full max-w-5xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">4. When would you choose to use Edge Functions, Serverless Functions, or Edge
Middleware with Vercel?:</h2>
      <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
        <li className="mb-2">
          <p>
          Edge Functions: These functions are executed at Vercel&apos;s edge locations close to the user&apos;s origin, providing low latency .  Edge Functions are ideal for scenarios where speed, efficiency, and low latency are crucial, making them suitable for tasks like data fetching or rewrites.

Serverless Functions: Are more mature and widely used, offering global low latency and supporting various regions. They are suitable for scenarios where traditional serverless functions are required, providing flexibility and scalability. However, they may have cold start issues and certain limitations compared to Edge Functions.

Edge Middleware: This intercepts requests before they reach serverless functions, allowing for modifications or updates to requests close to the user&apos;s origin. Edge Middleware runs on Vercel&apos;s edge locations and can be used in conjunction with Serverless functions. It is beneficial for scenarios where intercepting requests and making changes before processing them in serverless functions is necessary.
          </p>
        </li>
    </ol>
  </div>
  <div className="w-full max-w-5xl mt-8">
    <h2 className="text-2xl font-semibold mb-4">5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?:</h2>
    <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
      <li className="mb-2">
        <p>
        I would try to get as much information as I can from the customer like the specific framework or technology involved,  version of the framework or technology they are  using, dependencies or libraries being used, screenshot of error messages or logs, if  the issue started after a particular update or change, steps to reproduce the issue and documentation they are referring.
        </p>
      </li>
  </ol>
</div>
<div className="w-full max-w-5xl mt-8">
  <h2 className="text-2xl font-semibold mb-4">6. The customer from question 5 replies to your response with the below:
  <br />
  <br />
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
out. It must be a platform issue so just fix it for me instead of asking me questions.”
<br />
<br />
Please write a follow-up reply to the customer.</h2>
  <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
    <li className="mb-2">
      <p>
      Hey there,
      <br /><br />
      </p>
      <p>
Thank you for getting back to us!
<br /><br />
</p>
<p>
I’m really sorry to hear about the frustration you’re experiencing. I understand how challenging and time-consuming these issues can be. But I can assure you that I will do my best to help you out.
<br /><br />
</p>
<p>
To assist you as efficiently as possible, I need a bit more information to identify the exact cause of the problem. This will help us determine if it is indeed a platform issue or something specific to your setup that we can resolve quickly.
Here’s what would help us move forward:
</p>
<p>
<p>1. Error Messages or Logs: The exact error messages or logs you are seeing can provide crucial clues.</p>
<p>2. Version, dependencies and the version of the framework you’re using.</p>
<p>3. If you can recall any recent changes made to your code or environment, it could point us in the right direction.</p>
<p>4. Steps to replicate the issue and any documentation that you are referring to while working on your Framework.</p>
</p>
<br /><br />
<p>
I understand that this might feel like extra work, but this information is essential to pinpoint the issue accurately and find a solution as quickly as possible. We’re here to help you through each step of the process.
</p>
<br /><br />
<p>
Waiting to hear back from you!
</p>
<br /><br />
<p>
Regards,
</p>
<p>
Damesh
</p>
<p>
Customer Success Engineer
      </p>
    </li>
</ol>
</div>
<div className="w-full max-w-5xl mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    7. A customer writes in to the Helpdesk asking &quot;How do I do a redirect from the /blog
    path to https://example.com?&quot; Please write a reply to the customer. Feel free to add any
    information about your decision making process after the reply:
  </h2>
  <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
    <li className="mb-2">
      <p>
        Hi there,
        <br /><br />
        Thank you for reaching out to us!
        <br /><br />
        To set up a redirect from the /blog path to https://example.com on Vercel, you can use the <code>vercel.json</code> configuration file. Here is an example configuration you can use:
      </p>
      <pre>
        {`{
  "redirects": [
    {
      "source": "/blog",
      "destination": "https://example.com"
    }
  ]
}`}
      </pre>
      <p>
        For more detailed information, you can refer to our documentation on redirects:
        <a href="https://vercel.com/docs/projects/project-configuration#redirects" target="_blank" rel="noopener noreferrer">
          https://vercel.com/docs/projects/project-configuration#redirects
        </a>
        <br /><br />
      </p>
      <p>
        If you encounter any issues or have further questions, feel free to reply to this email, and we’ll be happy to assist you.
        <br /><br />
      </p>
      <p>
        Best regards,<br />
        Damesh<br />
        Customer Success Engineer
      </p>
    </li>
  </ol>
</div>
<div className="w-full max-w-5xl mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    8.A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
  </h2>
  <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
    <li className="mb-2">
      <p>
        Hello there,
        <br /><br />
        Thank you for reaching out to us!
        <br /><br />
        I&apos;m happy to provide you with the necessary information to help you with your concern regarding indexing.
        <br /><br />
        Vercel deployments are not indexed by search engines by default because the <code>X-Robots-Tag</code> HTTP header is set to <code>noindex</code>. However, if you are using a custom domain that is assigned to a non-production branch, the header <code>X-Robots-Tag: noindex</code> will not be set.
        <br /><br />
        To confirm the value of the <code>X-Robots-Tag</code> header, you can use the following Curl command:
        <br /><br />
        <code>curl -I &lt;preview-deployment-url&gt;</code>
        <br /><br />
        Among the output, you will find an <code>X-Robots-Tag</code> header after executing the Curl command:
        <br /><br />
        <code>x-robots-tag: noindex</code>
        <br /><br />
        If you are using a custom domain for your preview deployments and wish to override the default behavior of omitting <code>X-Robots-Tag: noindex</code>, you should first look to inject the response header using your framework&apos;s built-in methods. If you are not using a framework or your framework does not support injecting response headers, you may modify the <code>headers</code> object in your <code>vercel.json</code> file. You can learn more about it using the link below:
        <br /><br />
        <a href="https://vercel.com/guides/are-vercel-preview-deployments-indexed-by-search-engines" target="_blank" rel="noopener noreferrer">
          https://vercel.com/guides/are-vercel-preview-deployments-indexed-by-search-engines
        </a>
        <br /><br />
        Let us know if you have any additional questions. We&apos;re happy to help!
        <br /><br />
        Regards,<br />
        Damesh<br />
        Customer Success Engineer
      </p>
    </li>
  </ol>
</div>
<div className="w-full max-w-5xl mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
  </h2>
  <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
    <li className="mb-2">
      <p>
        I think one of the most common issues customers face is with build problems.
        <br /><br />
        In the short-term, I would help the customer fix the issue as soon as possible. This involves troubleshooting the immediate problem, providing step-by-step guidance, and ensuring that their build succeeds.
        <br /><br />
        In the long-term, to prevent this issue from recurring, I would explain the root cause of the problem in detail. I would provide the customer with an understanding of why the issue occurred and how it can be prevented in the future. By equipping the customer with this knowledge, they would be able to avoid similar issues going forward.
      </p>
    </li>
  </ol>
</div>
<div className="w-full max-w-5xl mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    10.How could we improve or alter this familiarisation exercise?
  </h2>
  <ol className="list-decimal list-inside" style={{ listStyleType: "none" }}>
    <li className="mb-2">
      <p>
        No complaints here, it is simple and to the point.
      </p>
    </li>
  </ol>
</div>
  </main>
  );
}
