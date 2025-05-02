import './App.css'
import { CategoryPills } from './components/CategoryPills'
import { PageHeader } from './layout/PageHeader'
import { categories, videos } from './data/home'
import { useState } from 'react'
import { VideoGridItem } from './components/VideoGridItem'
import { Sidebar } from './components/Sidebar'
import { SidebarProvider } from './context/sidebarContext'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col'>
        <PageHeader />
        <div className='grid grid-cols-[auto_1fr]
        grow overflow-auto'>

            {/* column-1 */}
            <Sidebar />

            {/* column-2 */}

            {/* upper suggestions */}
            <div className='overflow-x-hidden px-8 pb-4'>
              <div className='sticky top-0 bg-white z-10 pb-4'>
                <CategoryPills  categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
                />
              </div>

              {/* video cards  */}
              <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
                {videos.map(video => (
                  <VideoGridItem key={video.id} {...video}/>
                ))}
              </div>
            </div>

        </div>
      </div>
  </SidebarProvider>
)}

export default App
