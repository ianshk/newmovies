const apiUrl: string = 'https://api.themoviedb.org/3';
const apiImages: string = 'https://image.tmdb.org/t/p';

export async function getMovie(id: number) {
  try {
    const response = await fetch(`${apiUrl}/movie/${id}?api_key=${process.env.TMB_API_KEY}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response?.ok) {
      return null;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}

export async function getMoreMovies(id: number) {
  try {
    const response = await fetch(`${apiUrl}/movie/${id}/recommendations?api_key=${process.env.TMB_API_KEY}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response?.ok) {
      return null;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}

export async function getTrendingMovies(page: number) {
  try {
    const response = await fetch(`${apiUrl}/trending/movie/week?api_key=${process.env.TMB_API_KEY}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response?.ok) {
      return null;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}

export async function getSimilarMovies(id: number) {
  try {
    const response = await fetch(`${apiUrl}/movie/${id}/similar?api_key=${process.env.TMB_API_KEY}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response?.ok) {
      return null;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
export function shuffleArray(array: any) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}
