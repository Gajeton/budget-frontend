
interface ProgressBarProps {
    nbTotal: number
    nbDone: number
}

const ProgressBarLine = ({ nbTotal, nbDone  } : ProgressBarProps) => {

    const pourcentage = (nbDone / nbTotal) *  100 
    return (
        <div className='w-full h-10 bg-[#D8D9DA] rounded-sm'>
            <div
                style={{ width: `${pourcentage}%`}}
                className={`h-full rounded-sm flex items-center justify-end ${
                    pourcentage < 10 ? 'bg-[#FF0060]' : 'bg-[#00DFA2]'}`}>
                        <p className="px-3">{nbDone} days / {nbTotal} days</p>
            </div>
        </div>
    );
};

export default ProgressBarLine