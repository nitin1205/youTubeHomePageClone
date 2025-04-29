import './App.css'
import { CategoryPills } from './components/CategoryPills'
import { PageHeader } from './layout/PageHeader'
import { categories } from './data/home'
import { useState } from 'react'
function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className='grid grid-cols-[auto_1fr]
      grow overflow-auto'>

          {/* column-1 */}
          <div>Sidebar</div>

          {/* column-2 */}
          <div className='overflow-x-hidden px-8 pb-4'>
            <div className='sticky top-0 bg-white z-10 pb-4'>
              <CategoryPills  categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
              />
            </div>
          </div>

      </div>
    </div>
  )
}

export default App
