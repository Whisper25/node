function Link(props){
    const {href, content} = props;
    return <a href={href} target="_blank">{content}</a>
}
export default Link;