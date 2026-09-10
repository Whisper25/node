import './App.css';
import Heading from './components/Heading';
import Link from './components/Link';
import Paragraph from './components/Paragraph';


function App (){
    const name = 'Brad'
    const isAdult=true;
    return(
        <>
            <h1 className='heading'>{isAdult?'HEllo':'Hi'}hi, {name}! from react</h1>
            <Heading titleContent='something' userName ={name}/>
            {/* paragraph */}
            <Paragraph content='content'/>
            <Heading titleContent='something new'/>
            <Paragraph content='lorem'/>
            <Link href='https://www.google.com/?hl=ru' content="google"/>
        </>
        
    );
}

export default App;