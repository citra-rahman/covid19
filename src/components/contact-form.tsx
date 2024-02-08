
export default function ContactForm() {
    return (
        <form className="flex flex-row flex-no-wrap w-[30vw] px-[2vw] rounded-full bg-white justify-between">
            <input type="text" placeholder="your-email@gmail.com" name="input" className="text-center text-[1vw] w-[17vw] h-[5vh] my-[2vh]"/>
            <button type="submit" className="text-[1vw] text-white bg-red-400  w-[8vw] px-[0.5vw] my-[1.5vh] rounded-full">Send</button>
        </form>
    )
}