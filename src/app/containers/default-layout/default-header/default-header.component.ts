import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { LoginRegisterService } from 'src/app/views/pages/login/authservice/login-register.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',

})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,public auth:LoginRegisterService) {
    super();
  }
  logout(){
this.auth.logout();
  }
}
