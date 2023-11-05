import './App.css'
import Display from './Components/Display'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {

  const details = [
    {
      id: 1,
      title: 'Home',
      describe: "Our homepage features a user-friendly layout with key elements: an 'Extension Activation' button for quick access to activate the extension, a 'Previous Analysis' section enabling users to review their past activities, and a 'Documentation' button for easy access to comprehensive user guidance and instructions. It's a seamless experience to help users engage with our services effectively.",
      image: "https://i.ibb.co/ZcYy7k8/IMG-20231105-WA0003.jpg"
    },
    {
      id: 2,
      title: 'Feature',
      describe: 'Our Chrome extension offers a comprehensive suite of features, including real-time code analysis to identify and rectify issues, a user-friendly rating system for evaluating code quality, and automatic code optimization to enhance performance and efficiency. Elevate your coding experience and productivity with our all-in-one solution.',
      image: "https://i.ibb.co/0hLn1k2/IMG-20231105-WA0002.jpg"
    },
    {
      id: 3,
      title: 'Results',
      describe: 'Our Chrome extension integrates seamlessly with the powerful OpenAI API to provide a holistic coding experience. It offers real-time code analysis with insightful ratings, constructive suggestions for improvement, and automatic code optimization to enhance performance. Elevate your coding skills and productivity with our extension, which empowers you with detailed feedback and efficient code enhancement.',
      image: "https://i.ibb.co/YW0xp7G/IMG-20231105-WA0005.jpg"
    },
    {
      id: 4,
      title: 'Parameters',
      describe: "We assess your code on multiple fronts, including indentation, algorithm efficiency, code comments, and code readability. Our system assigns insightful ratings that take into account these essential criteria, allowing you to not only identify mistakes but also receive constructive feedback on how to improve your code's structure, efficiency, and overall quality",
      image: "https://i.ibb.co/YW0xp7G/IMG-20231105-WA0005.jpg"
    },
    {
      id: 5,
      title: 'Improved Code',
      describe: 'Our Chrome extension is designed to be your coding companion, harnessing the capabilities of the OpenAI API to provide thorough code analysis. It not only offers insightful ratings and suggestions for improvement but also delivers optimized code based on the deep knowledge it possesses.',
      image: "https://i.ibb.co/frz4Mx9/Screenshot-2023-11-05-110427.png"
    },

  ]

  return (
    <main >
      <Navbar />
      {
        details.map(detail => (
          <Display key={detail.id} id={detail.id} title={detail.title} desc={detail.describe} image={detail.image} />
        ))
      }
      <hr className='mx-24' />
      <Faqs />
      <Footer />
    </main>
  )
}

export default App
