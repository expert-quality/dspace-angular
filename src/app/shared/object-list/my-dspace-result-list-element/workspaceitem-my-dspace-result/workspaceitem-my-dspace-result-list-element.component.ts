import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';

import { MyDSpaceResultListElementComponent, } from '../my-dspace-result-list-element.component';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { WorkspaceItem } from '../../../../core/submission/models/workspaceitem.model';
import { WorkspaceitemMyDSpaceResult } from '../../../object-collection/shared/workspaceitem-my-dspace-result.model';
import { RemoteData } from '../../../../core/data/remote-data';
import { isNotUndefined } from '../../../empty.util';
import { Item } from '../../../../core/shared/item.model';
import { MyDspaceItemStatusType } from '../../../object-collection/shared/mydspace-item-status/my-dspace-item-status-type';
import { listableObjectComponent } from '../../../object-collection/shared/listable-object/listable-object.decorator';

/**
 * This component renders workspaceitem object for the mydspace result in the list view.
 */
@Component({
  selector: 'ds-workspaceitem-my-dspace-result-list-element',
  styleUrls: ['../my-dspace-result-list-element.component.scss', './workspaceitem-my-dspace-result-list-element.component.scss'],
  templateUrl: './workspaceitem-my-dspace-result-list-element.component.html',
})

@listableObjectComponent(WorkspaceitemMyDSpaceResult.name, ViewMode.ListElement)
export class WorkspaceitemMyDSpaceResultListElementComponent extends MyDSpaceResultListElementComponent<WorkspaceitemMyDSpaceResult, WorkspaceItem> {

  /**
   * The item object that belonging to the result object
   */
  item: Item;

  /**
   * Represent item's status
   */
  status = MyDspaceItemStatusType.WORKSPACE;

  /**
   * Initialize all instance variables
   */
  ngOnInit() {
    this.initItem(this.dso.item as Observable<RemoteData<Item>>);
  }

  /**
   * Retrieve item from result object
   */
  initItem(item$: Observable<RemoteData<Item>>) {
    item$.pipe(
      find((rd: RemoteData<Item>) => rd.hasSucceeded && isNotUndefined(rd.payload))
    ).subscribe((rd: RemoteData<Item>) => {
      this.item = rd.payload;
    });
  }
}
