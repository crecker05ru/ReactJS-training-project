import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Notes = ({notes, onRemove}) =>{
    return (
        <TransitionGroup>
        <ul className="list-group">
            {notes.map(note => (
                <CSSTransition
                key={note.id}
                timeout={800}
                classNames={'note'}>
                <li className="list-group-item note"
                key={note.id}
                >
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}
                    >&times;</button>
                </li>
                </CSSTransition>
            ))}
        </ul>
        </TransitionGroup>
    )
}