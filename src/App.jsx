import Header from './components/Header'
import Cardog from './components/Card'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <>
      <Header title="Adota un perrito"/>
      <main>
      <Cardog name="Puppy" description="es un ser lleno de amor y alegría que está buscando su hogar para siempre. Este peludo amigo tiene mucho amor para dar y está listo para convertirse en un miembro valioso de tu familia" image="https://m.media-amazon.com/images/I/51z0O2QCHzL.__AC_SX300_SY300_QL70_FMwebp_.jpg" colorBadge="success" textBadge="Pug" />
      <Cardog name="Balltze" description="un alma noble que busca un hogar lleno de amor y cuidado. Este fiel amigo peludo está listo para compartir su amor y alegría contigo" image="https://i2-prod.mirror.co.uk/incoming/article30743488.ece/ALTERNATES/s1200b/3_balltze_15043444_342805982753118_3779381984220938240_n.jpg" colorBadge="primary" textBadge="Shiba inu" />
      <Cardog name="Luna" description="es un perro especial en busca de un hogar lleno de amor y felicidad. Con su mirada tierna y personalidad encantadora, se convertirá en un miembro querido de tu familia en un abrir y cerrar de ojos" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkbWpjRzeU5nj4cT5fkNfcgVwz41VbDO7PQ&usqp=CAU" colorBadge="danger" textBadge="Pitbull" />
      <Cardog name="Coco" description="es un adorable compañero canino que está esperando ansiosamente encontrar su hogar para siempre. Con su personalidad única y amorosa, este perrito hará que tu vida esté llena de alegría y amor" image="https://i.imgflip.com/6d5553.jpg?a470544" colorBadge="warning" textBadge="Dachshund"/>
      </main>
      <Footer />
      
    </>
  )
}

export default App
