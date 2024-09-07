---
title: Mastering Angular Component Styling
slug: master-angular-component-styling
date: 2024-09-07
author: Pranav Arora
description: Mastering Angular Component Styling: A Guide to CSS Layering and Dynamic Class Management. No ng:deep required!
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/isadyg3qovvb7kvpjri4.png
---

## Introduction

Component libraries make developers' lives easier as all the components developed are collected in a single library and can be reused in different applications. While creating an Angular Component library, the issue comes when we have to tweak a specific component according to the particular application requirement without touching the component library's styles. After the deprecation of [`ng:deep`](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep), it was hard to tweak such changes.

I studied how [PrimeNg](https://primeng.org/) does CSS customizations to its components without `ng:deep.` This blog will share my findings and steps to implement these component styling techniques in your component library and its consumer applications.

In this blog, we will explore two powerful concepts used by PrimeNg to customize component styles without affecting other components: CSS Layering and Dynamic Class Management. These techniques allow developers to efficiently tweak the appearance of components within their own consumer application, while maintaining a clean separation of styles in their component library.

## **Layering**

One of the key strategies employed by PrimeNg is [CSS Layering](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer). All component styles are placed within the `@layer primeng` rule. This approach ensures that when styling the components in our component library, the styles defined in our library take precedence over the styles defined in PrimeNg.

To facilitate this, encapsulation in PrimeNg is set to None. By setting encapsulation to none, it allows the PrimeNg components to be styled from our component library, enabling greater customization options.

## **Dynamic Class Management**

Another important concept employed by PrimeNg is Dynamic Class Management. Without this concept, any CSS changes made for one component within our component library would inadvertently affect another component in the consumer application if the same component is used.

To address this issue, Dynamic Class Management introduces a new input attribute, let's say, `styleClass`, which is bound to the class of the component. The component is then wrapped in a `<div>` element with the attributes `[class]="styleClass"` and `[ngClass]="'parent-component-class'"`. When the `styleClass` attribute is provided by the user, it overwrites the styles defined in the `parent-component-class`. This allows for the coexistence of both classes, with the styles specified in the `styleClass` attribute taking precedence over the `ngClass`.

Since `ng:deep` is deprecated and no longer recommended, using Dynamic Class Management is a more modern and maintainable approach to styling components without affecting other components in the consumer application.

By utilizing the `bStyleClass` attribute with specific styling attributes, it is possible to override attributes defined in the parent class (`ngClass`). Both `[class]` and `[ngClass]` will be applied, but the styles defined in `[class]` will take precedence over `ngClass`. Any styles not specified in `[class]` will be inherited from the class defined in `[ngClass]`.


![Component Styling](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/isadyg3qovvb7kvpjri4.png)

***Example***: In the case of the `button` component, the styles specified in our component library were overridden by the styles in the consumer apps (App 1 and App2). However, other attributes (such as text and size) from our library were applied since there was no override for them in `button`.

## **Steps to Adopt Layering and Dynamic Class Management in the Component Library**

To implement layering and dynamic class management in our component library, follow these steps:

1. Layer all the CSS in the component library using `@layer component-library{}`.
2. Introduce a new input attribute, let's say, `bStyleClass`.
3. Wrap the component template in a `<div>` element with the following attributes: `<div [class]="bStyleClass!" [ngClass]="'parent-component-class'">...</div>`.
4. Set Encapsulation to None for all components in the component library.

## **Steps to Adopt Layering and Dynamic Class Management in the Consumer Application**

To implement layering and dynamic class management in the consumer applications, follow these steps:

1. Set encapsulation to None for all components in the consumer application.
2. Add the `bStyleClass` attribute to the components and assign a className.
3. In the component's CSS, style the component with the given className as the `parent-component-class`.

It is important to note that if we use the @layer, the behavior of @layer changes when `!important` is used. The style precedence of attributes with `!important` reverses the concept of precedence in layers.

Additionally, when styling consumer applications, it is advisable to focus on application-specific attributes rather than core-specific attributes. Application-specific attributes include padding, margin, color, width, height, etc. By leveraging the use of `!important` on core-specific attributes and avoiding it on application-specific attributes, we can maintain better control over style precedence. When mentioning `!important` in the component library, it is important to specify if it has been used on a core attribute that should not be changed in the consumer application.

## Conclusion:

By employing CSS Layering and Dynamic Class Management, developers can effectively customize component styles without impacting other components in their component library. These techniques, as demonstrated in PrimeNg, provide a robust approach to component styling and enable greater flexibility and control over the appearance of applications.

To further enhance component styling, concepts like `[style]` and `[ngStyle]` can be utilized to programmatically change inline CSS in the consumer application.

Remember, with CSS Layering and Dynamic Class Management, developers can create visually appealing and highly customizable applications while maintaining a clean and organized codebase.

## Attributions

- [PrimeNg](https://primeng.org/)
- [PrimeNg GitHub](https://github.com/primefaces/primeng)
- [Angular Style Precedence](https://angular.io/guide/style-precedence)
- [CSS Layering](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
