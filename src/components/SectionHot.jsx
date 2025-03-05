
import  './componentsStyle/SectionHot.css'
import HotCardList from './HotCardList.jsx'
import Title from './Title.jsx'

export default function SectionHot() {

    return (


        <section className='light-bg'>
  
            <div className='wrapper'>

                <Title  text1='Hottest' text2='Plants' showLink={true} />
                <HotCardList />

            </div>


       </section>

    )

      
    
}