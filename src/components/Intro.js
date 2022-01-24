function Intro() {
  return (
    <div className='intro'>
      <h2>MAKE YOUR OWN RECIPE</h2>
      <p>
        In this morphological chart you can find alternative ingredients to
        replace in recipes or to create new recipes with.
      </p>
      <p>
        In the chart you can see that all ingredients are divided into different
        groups. The ingredients that are displayed in the same group can be
        replaced by eachother.
      </p>
      <p>
        If you want to find out more information about a specific ingredient,
        you can click on it and you are given more information. If you are
        looking for a specific ingredient, we recommend you to use the search
        field so you can easily find it.
      </p>
      <p>
        Ready to create new recipes?{' '}
        <button id='getstarted'>
          <a href='#map'>GET STARTED</a>
        </button>
      </p>
    </div>
  );
}

export default Intro;
