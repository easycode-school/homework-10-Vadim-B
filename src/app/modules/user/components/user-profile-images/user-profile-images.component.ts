import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  public userImages: string[];

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  /**
   * при загрузке компоненты
   * 1. определяем id юзера, на странице которого мы находимся
   * 2. вызываем метод из UserService и ролучаем объект со всеми картинками пользователя
   * 3. присваеваем массив картинок в public userImages, откуда они идут в верстку
   */
  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.userService.getUserSelfies(id).subscribe((data) => {
      this.userImages = data.images;
    });
  }

}
