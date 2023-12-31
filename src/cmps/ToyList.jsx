import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import {CircularIndeterminate} from '../cmps/Loader.jsx'


import {ToyCards} from './ToyCards.jsx'

export function ToyList({ toys, onRemoveToy }) {

    console.log(toys);
    if(!toys.length) return <CircularIndeterminate />
    return (
        <section className="toy-list">
        {toys ? toys.map(toy => (
            <div className="toy-preview" key={toy._id}>
                <ToyCards onRemoveToy={onRemoveToy} toy={toy} />   
            </div>
        )) :
        <CircularIndeterminate />
        }
    </section>
    )
}

