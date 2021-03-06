
export default function FilterForm({ genres,  selectedGenre, genreChange}) {



  return (
    <div className='FilterForm-Container'>
      <p>filter by genre</p>     
      <select
        value={selectedGenre}
        onChange={(e) => genreChange(e.target.value)}>
        {
          genres.map(genre => <option value={genre} key={genre}>{genre}</option>)
        }
      </select>
      
    </div>
  )
}
