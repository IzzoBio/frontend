function NewsLetter() {
    return (
        <div className='w-full py-[3rem] bg-white'>
            <div className='max-w-[1280px] mx-auto flex gap-5'>
                <div className='flex-1'>
                    <h1 className='font-[600] text-[2rem] mb-2'>Partagez vos suggestions et idées avec nous.</h1>
                    <p className='text-[14px] text-gray-500'>
                        Vos suggestions comptent pour nous
                        nous sommes à l’écoute ! N’hésitez pas à nous faire part de vos idées !
                    </p>
                </div>
                <div className='flex-1'>
                    <form className='flex flex-wrap flex-row-reverse gap-4 items-center'>
                        <input
                            type='text'
                            name='text'
                            className='mt-4 w-full !border rounded-md px-3 py-2 focus:outline-none h-[100px]'
                            placeholder='Votre message ....'
                        />
                        <button disabled className='bg-terracota-500 text-white rounded-md p-2 font-medium'>
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;