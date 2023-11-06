function deletemovie(id){
    api.delete(`deleteMovie?id=${id}`)
    .then(()=>{
        getMovies();
    })
    .catch(err=>console.log(err));
}