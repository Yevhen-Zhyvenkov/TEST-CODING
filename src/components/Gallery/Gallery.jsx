import css from './Gallery.module.css'

const Gallery =()=> {
     
    
    return <div className={css.background}>
            <section className={css.gallery}>
                <article className={css.card}>
                    <figure>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={css.card}>
                    <figure>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={css.card}>
                    <figure>
                        <img
                            src="https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg"
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={css.card}>
                    <img
                        src="https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_1280.jpg"
                        alt="Preview"
                        title="Preview"
                    />
                </article>
                
                
            </section>            
        </div>
    }

 
export default Gallery;