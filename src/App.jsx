import Header from './components/Header'
import PostCard from './components/PostCard'
import Categories from './components/Categories'
import AddPost from './components/AddPost'
import Aside1 from './components/Aside1'
function App() {

  return (
    <>
      <Header></Header>
      <Categories></Categories>
      <div className="m-auto container flex mt-5 text-white overflow-hidden">
        <div className='m-auto flex gap-5'>
          <main className='flex gap-5 flex-col'>
            <AddPost></AddPost>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
          </main>
          <Aside1></Aside1>
        </div>
      </div>
    </>
  )
}

export default App
