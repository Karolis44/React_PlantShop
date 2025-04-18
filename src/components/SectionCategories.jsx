import CategoriesList from './CategoriesList';
import './componentsStyle/SectionCategories.css';
import Title from './Title';

export default function SectionCategories() {
    return (
        <section className="wrapper">
            <Title text1='Shop' text2='by Category' showLink={false} />
            <CategoriesList />
        </section>
    );
}