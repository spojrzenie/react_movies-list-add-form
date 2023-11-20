import { FormEventHandler, useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

const MovieState = {
  title: '',
  description: '',
  imgUrl: '',
  imdbUrl: '',
  imdbId: '',
};

type Props = {
  onAdd: (movie: Movie) => void,
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [movie, setMovie] = useState(MovieState);

  const reset = () => {
    setMovie(MovieState);
  };

  const handleChange = (key: string, value: string) => {
    setMovie(prev => ({ ...prev, [key]: value }));
  };

  const {
    title, description, imgUrl, imdbUrl, imdbId,
  } = movie;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    onAdd(movie);
    setCount(count + 1);
    reset();
  };

  const submitDisabled = !movie.title.trim()
    || !movie.imgUrl.trim()
    || !movie.imdbUrl.trim()
    || !movie.imdbId.trim();

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={(value) => handleChange('title', value)}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={(value) => handleChange('description', value)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={(value) => handleChange('imgUrl', value)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={(value) => handleChange('imdbUrl', value)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={(value) => handleChange('imdbId', value)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={submitDisabled}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
