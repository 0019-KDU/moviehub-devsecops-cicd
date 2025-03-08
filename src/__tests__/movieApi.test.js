import { vi, describe, beforeEach, test, expect } from "vitest";
import { getPopularMovies, searchMovies } from "../services/api";

// Mock fetch globally
// eslint-disable-next-line no-undef
global.fetch = vi.fn();

beforeEach(() => {
  vi.restoreAllMocks(); // Reset all mocks before each test
});

describe("API functions", () => {
  test("fetches popular movies", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({ results: [{ id: 1, title: "Movie 1" }] }),
    });

    const movies = await getPopularMovies();
    expect(movies).toHaveLength(1);
    expect(movies[0].title).toBe("Movie 1");
  });

  test("searches for movies", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({ results: [{ id: 2, title: "Search Movie" }] }),
    });

    const movies = await searchMovies("Search Movie");
    expect(movies).toHaveLength(1);
    expect(movies[0].title).toBe("Search Movie");
  });
});
