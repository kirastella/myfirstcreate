import styled from "styled-components";

const LargeHeading = styled.h1`
font-size: 4em;
font-family: Arial, Helvetica, sans-serif;
color: teal;
`

const Styled = () => {
    return ( 
        <section>
            <h1>Style Componens</h1>
            <LargeHeading>Stor overskrift!!</LargeHeading>
            <input type="text" name="bla" id="bla"/>
            <button>Create</button>
        </section>
     );
}
 
export default Styled;