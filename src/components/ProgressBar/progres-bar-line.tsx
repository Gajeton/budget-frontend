
interface ProgressBarProps {
    nbTotal: number
    nbDone: number
}

export const ProgressBarLine = ({ nbTotal, nbDone  } : ProgressBarProps) => {

    const pourcentage = (nbDone / nbTotal) *  100 
    return (

        <div className='w-full h-10 bg-[#D8D9DA] rounded-sm relative'>
            <div style={{ width: `${pourcentage}%`}}
                className={`h-full rounded-sm flex items-center justify-end ${
                    pourcentage < 10 ? 'bg-[#FF0060]' : 'bg-[#00DFA2]'}`}>
                    {nbDone > 10 &&
                    <p className="px-3">{nbDone} days / {nbTotal} days</p>}
            </div>
            {nbDone < 10 && <p className="absolute top-2 left-1">{nbDone} days</p> }
        </div>
    );
};

export default ProgressBarLine