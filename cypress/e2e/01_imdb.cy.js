import google from "../support/imdb/google";
import imdb from "../support/imdb/imdb";

describe('Imdb Test Suite', () => {
    it('OLDOPB00-0001 Navigate to Imdb and print first five celebrities born today', () => {
        const celebritiesAmount = 5;
        const categoryName = 'Celebs';
        const subCategory = 'Born Today';

        google.visitHomePage();
        google.searchForInput('imdb');
        google.clickImdbLink();
        imdb.openMenu();
        imdb.checkMenuCategoryName(categoryName)
        imdb.navigateToSubCategory(subCategory);
        imdb.checkCelebrityListVisible();
        imdb.checkCelebrityNameNumbering(celebritiesAmount);
        imdb.printCelebrities(celebritiesAmount); // Names are printed to cypress and browser console
    });
  });