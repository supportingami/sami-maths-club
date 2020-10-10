# Authors

## Activity Format

We welcome any contibutions people are able to make the activities that appear in the maths camp pack. Before suggesting any new materials we recommend first taking a look at the existing pack to gauge the typical styles of problem and levels of difficulty, and then produce two versions:

1. Student Version  
   This should be a simple poster format (minimal text and images) that fits on a single A4 page, presenting the full activity.

See an [Example Student Template](../maths-club-pack/templates/student.md)

2. Facilitator Version  
   This should provide all of the information required for a teacher or student to effecitvely support others solving the problem, including possible approaches, worked solutions, and ways to extend the problem.

See an [Example Facilitator Template](../maths-club-pack/templates/facilitator.md)

## Document Format

All documents are written in the `markdown` text format to allow for consistency across problems and integration into the app. For a guide of how to do formatting in markdown see: https://www.markdownguide.org/basic-syntax/

### Images

Any images required in problems will be stored separately to allow the same image to appear across multiple translations of the problem. As such it is important that no language-specific text appears in an image.

To add an image to a problem it should be saved in the same folder as the markdown (`.md`) file, and named with reference to the problem title (e.g. `buffons-needle-1.jpg`).

To add the image to the document use the markdown syntax:

```
![optional image description](image-filename.jpg)
```

### Latex

Mathematical notation can be renderred using the [Katex](https://katex.org/) typesetting library for Latex. For an example see the `Pell Numbers` problem

## Submitting Problems

Once you have student and facilitator versions of your problem you can either email them to [admin@supportingami.org](mailto:admin@supportingami.org?subject=SAMI%20Maths%20Club%20Resources), or create a pull request to add them to the `maths-club-pack/content` folder

# Review Checklist

Once a submission has been added the following should be done by reviewers/developers:

- [ ] Ensure student and facilitator versions exist, and match template format
- [ ] Check images are reasonable size
- [ ] Add top metadata to student version
- [ ] Create cover image svg
- [ ] Add to weekly problem list
- [ ] Notify translators
- [ ] Set release to publish live
- [ ] Notify and thank authors
