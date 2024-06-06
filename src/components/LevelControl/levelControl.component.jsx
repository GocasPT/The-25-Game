import PropTypes from 'prop-types';
import './levelControl.css';

function LevelControl({ onLevelChange }) {
    return(
        <section className='levelControl'>
            <h2>Select Level</h2>
            <form>
                <fieldset>
                    <label htmlFor="btLevel">Level:</label>
                    <select 
                        id="btLevel"
                        defaultValue={1}
                        onChange={(event) => onLevelChange(parseInt(event.target.value) + 4) }
                    >
                        <option value={1}>Normal</option>
                        <option value={2}>Hard</option>
                        <option value={3}>Very Hard</option>
                    </select>
                </fieldset>
            </form>
        </section>
    );
}

LevelControl.propTypes = {
    onLevelChange: PropTypes.func.isRequired,
};

export default LevelControl;