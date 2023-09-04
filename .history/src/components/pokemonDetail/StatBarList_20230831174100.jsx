import PropTypes from 'prop-types';
import { BarProgresStat } from './BarProgresStat';

const StatBarList = ({ stats }) => {
    return (
        <section>
            <h2>Stats</h2>
            <section>
                <ul>
                    {
                        stats?.map((stat) => <BarProgresStat key={stat.name} stat={stat} />)
                    }
                </ul>
            </section>
        </section>
    );
}

StatBarList.propTypes = {
    stats: PropTypes.array.isRequired,
};

export default StatBarList;
