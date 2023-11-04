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
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea distinctio alias? Eveniet ab enim aperiam laudantium cum, tenetur in fugiat consectetur vel magnam fuga expedita beatae sapiente culpa odio? Tenetur sapiente laudantium in at iure culpa minima illum cum.',
      image: "https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png"
    },
    {
      id: 2,
      title: 'Feature',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea distinctio alias? Eveniet ab enim aperiam laudantium cum, tenetur in fugiat consectetur vel magnam fuga expedita beatae sapiente culpa odio? Tenetur sapiente laudantium in at iure culpa minima illum cum.',
      image: "https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png"
    },
    {
      id: 3,
      title: 'Results',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea distinctio alias? Eveniet ab enim aperiam laudantium cum, tenetur in fugiat consectetur vel magnam fuga expedita beatae sapiente culpa odio? Tenetur sapiente laudantium in at iure culpa minima illum cum.',
      image: "https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png"
    },
    {
      id: 4,
      title: 'Parameters',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea distinctio alias? Eveniet ab enim aperiam laudantium cum, tenetur in fugiat consectetur vel magnam fuga expedita beatae sapiente culpa odio? Tenetur sapiente laudantium in at iure culpa minima illum cum.',
      image: "https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png"
    },
    {
      id: 5,
      title: 'Improved Code',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea distinctio alias? Eveniet ab enim aperiam laudantium cum, tenetur in fugiat consectetur vel magnam fuga expedita beatae sapiente culpa odio? Tenetur sapiente laudantium in at iure culpa minima illum cum.',
      image: "https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png"
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
