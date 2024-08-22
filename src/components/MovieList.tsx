import { For, type Resource } from "solid-js";
import type { Movie } from "../utils/api";

export default function MovieList(props: { movies: Resource<Movie[] | undefined> }) {

    return (
        <ol>
            <For each={props.movies()}>
                {(movie) => (
                    <li>
                        {movie.title} ({movie.release_date})
                    </li>
                )}
            </For>
        </ol>
    )
}