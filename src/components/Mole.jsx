import moleImage from '@/assets/image.png';

function Mole( { onWhack, position } ) {
    return (
        <div 
            onClick={onWhack}    
            style={{
                cursor: 'pointer',
                position: 'absolute',
                top: `${position.top}px`,
                left: `${position.left}px`,
                transition: 'top 0.2s, left 0.2s',
            }}>
            <img src={moleImage} alt="mole" style={{ width: '80px' }} />
        </div>
    );
}

export default Mole;