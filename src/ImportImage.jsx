import images from './assets/images.js'

const ImportImage = () => {

    return (
        <div>
            {
                images.map((image) => {
                    return <>
                        <h2>{image.title}</h2> <img style={{ width: 400, height: 400 }} src={image.img} />
                    </>
                }
                )
            }
        </div>
    )
}

export default ImportImage