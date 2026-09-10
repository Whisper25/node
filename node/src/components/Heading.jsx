function Heading(props){
    const sum = (n1, n2)=>n1+n2;
    return <h2>{props.titleContent}{props.userName}{sum(2,3)}</h2>
}
export default Heading;