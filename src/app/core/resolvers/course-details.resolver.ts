import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';

export const courseDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const coursesService = inject(CoursesService);
  const id = JSON.parse(route.paramMap.get('id') as string) ;
  console.log("🚀 ~ id:", id)

  return coursesService.getById(id as number) ;
};
