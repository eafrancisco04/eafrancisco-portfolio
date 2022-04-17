function Works(props) {

    return(
        <div class={props.className}>
                    <h3>{props.name}</h3>
                    <img src={props.img} alt="sample" />
                    <p>
                        {props.subhead}
                    </p>
                    <div>
                            Insert a description of something that you want to feature on this part. It can be an image too or whatever you want.
                    </div>
                    

        </div>
    )

}

    export default Works;